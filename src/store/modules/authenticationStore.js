const state = {
    spinner: {
        showSpinner: false,
        color: "positive",
        size: "3em",
        thickness: 10
    },
    IdentityModel:{},
    backRoute:  { name: "", route: "/"}
}

const getters = {
    spinner(state){
        return state.spinner;
    },
    IdentityModel(state){
        return state.IdentityModel;
    },
    backRoute(state){
        return state.backRoute;
    }
} 

const mutations = {
    Login(state, payload){
     const { token, user } = payload;
  
      const inMin = 24 * 60;
      let expiredAt = new Date(new Date().getTime() + (60000 * inMin)); //Milliseconds
      let obj = {
        value: { token, user },
        expiredAt: expiredAt.toISOString()
      }
      localStorage.setItem('seassionObj', JSON.stringify(obj));
  
      state.IdentityModel = user;
      
      if(state.IdentityModel.userType == "Admin"){
        this.$router.push('/admin');
      }
      else{
        this.$router.push('/newpay');
      }
  
      state.spinner.showSpinner = false;
      
    },
    setShowSpinner(state, payload){
        console.log("payload: ", payload)
        state.spinner.showSpinner = payload
        console.log("state.spinner.showSpinner: ", state.spinner.showSpinner)
    },
    setBackRoute(state, payload){
        state.backRoute = payload
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}