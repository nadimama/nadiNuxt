import Vue from "vue";
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

// const vuexLocalStorage = new VuexPersist({
//   key: 'vuex',
//   storage: window.localStorage
// })


let plugins = []
// function getPlugins() {
   

    if (process.browser) {
        const vuexLocal = new VuexPersistence<RootState>({
            storage: window.localStorage
        })

        plugins.push(vuexLocal.plugin)
    }
// }

// export const plugins = getPlugins()



const store = new Vuex.Store({
//   plugins: [vuexLocalStorage.plugin],
  plugins: plugins,
  state: {
    pageData: null,
    footer: null,
    isFirstTime: true,
    openDrawerOnLoad: false,
    orderConfirmation: {},
    googleAddress: {},
    storeCurrentOrder: {},
    emptyCart: { 
      timeStamp: null,
      tipSelected: 0,
      currentAmountToAddCustom: 0,
      sms: false,
      restaurant: "",
      billing:{
        billing_name: '',
        billing_address: '',
        billing_address_city: '',
        billing_address_state:'',
        billing_postal_code: ''
      },
      id:
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29),
      // items: [],
      preorder: false,
      scheduled_time: null,
      time_placed: null,
      confirmation_code:
        "mamnoon-" + Math.random().toString(36).substr(2, 29),
      charges: {
        total: 0,
        preTotal: 0,
        fees: 0,
        taxes: 0,
        tip: {
          amountOptions: [],
          amount: 0,
          payment_type: "Generic Online Ordering Integrated",
        },
        items: [],
      },
      fulfillment_info: {
        type: "pickup",
        estimated_fulfillment_time: null,
        customer: {
          email: "",
          phone: "",
          first_name: "",
          last_name: ""
        },
        instructions: "",
        no_tableware: false,
        delivery_info: {
          is_managed_delivery: false,
          address: {
            city: "",
            state: "",
            zip_code: "",
            address_line1: "",
            address_line2: "",
          },
        },
      },
      payments: {
        payments: [
          {
            payment_type: "Generic Online Ordering Integrated",
            amount: null,
          },
        ],
      },
    },
    storeCurrentOrderUpdate: { 
      timeStamp: null,
      tipSelected: 0,
      currentAmountToAddCustom: 0,
      sms: false,
      restaurant: "",
      billing:{
        billing_name: '',
        billing_address: '',
        billing_address_city: '',
        billing_address_state:'',
        billing_postal_code: ''
      },
      id:
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29),
      // items: [],
      preorder: false,
      scheduled_time: null,
      time_placed: null,
      confirmation_code:
        "mamnoon-" + Math.random().toString(36).substr(2, 29),
      charges: {
        total: 0,
        preTotal: 0,
        fees: 0,
        taxes: 0,
        tip: {
          amountOptions: [],
          amount: 0,
          payment_type: "Generic Online Ordering Integrated",
        },
        items: [],
      },
      fulfillment_info: {
        type: "pickup",
        estimated_fulfillment_time: null,
        customer: {
          email: "",
          phone: "",
          first_name: "",
          last_name: ""
        },
        instructions: "",
        no_tableware: false,
        delivery_info: {
          is_managed_delivery: false,
          address: {
            city: "",
            state: "",
            zip_code: "",
            address_line1: "",
            address_line2: "",
          },
        },
      },
      payments: {
        payments: [
          {
            payment_type: "Generic Online Ordering Integrated",
            amount: null,
          },
        ],
      },
    },
    storeCurrentOrderUpdateMamnoon: { 
      timeStamp: null,
      tipSelected: 0,
      currentAmountToAddCustom: 0,
      sms: false,
      restaurant: "Mamnoon",
      billing:{
        billing_name: '',
        billing_address: '',
        billing_address_city: '',
        billing_address_state:'',
        billing_postal_code: ''
      },
      id:
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29),
      // items: [],
      preorder: false,
      scheduled_time: null,
      time_placed: null,
      confirmation_code:
        "mamnoon-" + Math.random().toString(36).substr(2, 29),
      charges: {
        total: 0,
        preTotal: 0,
        fees: 0,
        taxes: 0,
        tip: {
          amountOptions: [],
          amount: 0,
          payment_type: "Generic Online Ordering Integrated",
        },
        items: [],
      },
      fulfillment_info: {
        type: "pickup",
        estimated_fulfillment_time: null,
        customer: {
          email: "",
          phone: "",
          first_name: "",
          last_name: ""
        },
        instructions: "",
        no_tableware: false,
        delivery_info: {
          is_managed_delivery: false,
          address: {
            city: "",
            state: "",
            zip_code: "",
            address_line1: "",
            address_line2: "",
          },
        },
      },
      payments: {
        payments: [
          {
            payment_type: "Generic Online Ordering Integrated",
            amount: null,
          },
        ],
      },
    },
    storeCurrentOrderUpdateRetail: { 
      getNow: false,
      schedule: false,
      ship: false,
      timeStamp: null,
      tipSelected: 0,
      currentAmountToAddCustom: 0,
      sms: false,
      restaurant: "Mamnoon",
      billing:{
        billing_name: '',
        billing_address: '',
        billing_address_city: '',
        billing_address_state:'',
        billing_postal_code: ''
      },
      id:
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29),
      // items: [],
      preorder: false,
      scheduled_time: null,
      time_placed: null,
      confirmation_code:
        "mamnoon-" + Math.random().toString(36).substr(2, 29),
      charges: {
        shipping: 0,
        total: 0,
        preTotal: 0,
        fees: 0,
        taxes: 0,
        tip: {
          amountOptions: [],
          amount: 0,
          payment_type: "Generic Online Ordering Integrated",
        },
        items: [],
      },
      fulfillment_info: {
        type: "pickup",
        estimated_fulfillment_time: null,
        customer: {
          email: "",
          phone: "",
          first_name: "",
          last_name: ""
        },
        instructions: "",
        no_tableware: false,
        delivery_info: {
          is_managed_delivery: false,
          address: {
            city: "",
            state: "",
            zip_code: "",
            address_line1: "",
            address_line2: "",
          },
        },
      },
      payments: {
        payments: [
          {
            payment_type: "Generic Online Ordering Integrated",
            amount: null,
          },
        ],
      },
    },
    storeCurrentOrderUpdateStreet: { 
      timeStamp: null,
      tipSelected: 0,
      currentAmountToAddCustom: 0,
      sms: false,
      restaurant: "Mamnoon Street",
      billing:{
        billing_name: '',
        billing_address: '',
        billing_address_city: '',
        billing_address_state:'',
        billing_postal_code: ''
      },
      id:
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29),
      // items: [],
      preorder: false,
      scheduled_time: null,
      time_placed: null,
      confirmation_code:
        "mamnoon-" + Math.random().toString(36).substr(2, 29),
      charges: {
        total: 0,
        preTotal: 0,
        fees: 0,
        taxes: 0,
        tip: {
          amountOptions: [],
          amount: 0,
          payment_type: "Generic Online Ordering Integrated",
        },
        items: [],
      },
      fulfillment_info: {
        type: "pickup",
        estimated_fulfillment_time: null,
        customer: {
          email: "",
          phone: "",
          first_name: "",
          last_name: ""
        },
        instructions: "",
        no_tableware: false,
        delivery_info: {
          is_managed_delivery: false,
          address: {
            city: "",
            state: "",
            zip_code: "",
            address_line1: "",
            address_line2: "",
          },
        },
      },
      payments: {
        payments: [
          {
            payment_type: "Generic Online Ordering Integrated",
            amount: null,
          },
        ],
      },
    },
    storeCurrentOrderUpdateMbar: { 
      timeStamp: null,
      tipSelected: 0,
      currentAmountToAddCustom: 0,
      sms: false,
      restaurant: "Mbar",
      billing:{
        billing_name: '',
        billing_address: '',
        billing_address_city: '',
        billing_address_state:'',
        billing_postal_code: ''
      },
      id:
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29) +
        "_" +
        Math.random().toString(36).substr(2, 29),
      // items: [],
      preorder: false,
      scheduled_time: null,
      time_placed: null,
      confirmation_code:
        "mamnoon-" + Math.random().toString(36).substr(2, 29),
      charges: {
        total: 0,
        preTotal: 0,
        fees: 0,
        taxes: 0,
        tip: {
          amountOptions: [],
          amount: 0,
          payment_type: "Generic Online Ordering Integrated",
        },
        items: [],
      },
      fulfillment_info: {
        type: "pickup",
        estimated_fulfillment_time: null,
        customer: {
          email: "",
          phone: "",
          first_name: "",
          last_name: ""
        },
        instructions: "",
        no_tableware: false,
        delivery_info: {
          is_managed_delivery: false,
          address: {
            city: "",
            state: "",
            zip_code: "",
            address_line1: "",
            address_line2: "",
          },
        },
      },
      payments: {
        payments: [
          {
            payment_type: "Generic Online Ordering Integrated",
            amount: null,
          },
        ],
      },
    },
    userProfileModalVisible: true,
    loggedIn: false,
    count: 0,
    names: [],
    shoppingCartItems: [],
    cart: 0,
    userName: '',
    currentUserEmail: '',
    userInfo: {},
    vegetarian: false,
    inventory: {
      snipCartItems: [],
      tockMeals: [],
      currentDay: String(new Date().getDate()).padStart(2, '0'),
      offerings: []
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    increment2 (state, { name }) {
      if (name in state) {
        state[name]++
      } else {
        state[name] = 1
      }
    },
    drawerTrue (state, { drawerTrue }) {
      state.openDrawerOnLoad = drawerTrue
    },
    orderCMR (state, { orderCMR }) {
      state.orderCMR = orderCMR
    },
    googleAddress (state, { googleAddress }) {
      state.googleAddress = googleAddress
    },
    addtocart (state) {
      state.cart = state.cart + 20
    },
    removeFromCart (state) {
      state.cart = state.cart - 20
    },
    switchLoggedIn (state) {
      state.loggedIn = !state.loggedIn
    },
    logOut (state) {
      state.loggedIn = false
      state.currentUserEmail = ''
    },
    logIn (state) {
      state.loggedIn = true
    },
    upserveOrderCurrentOrder(state, { storeCurrentOrder }){
      state.storeCurrentOrder = storeCurrentOrder
    },
    removeUserInfo(state){

      let billing = {
        billing_name: "",
        billing_address: "",
        billing_postal_code: ""
      }

      let customer = {
        email: "",
        phone: "",
        first_name: "",
        last_name: ""
      }

      state.storeCurrentOrderUpdate.billing = billing
      state.storeCurrentOrderUpdate.fulfillment_info.customer = customer

      state.storeCurrentOrderUpdateStreet.billing = billing
      state.storeCurrentOrderUpdateStreet.fulfillment_info.customer = customer

      state.storeCurrentOrderUpdateMamnoon.billing = billing
      state.storeCurrentOrderUpdateMamnoon.fulfillment_info.customer = customer

      state.storeCurrentOrderUpdateMbar.billing = billing
      state.storeCurrentOrderUpdateMbar.fulfillment_info.customer = customer

      state.storeCurrentOrderUpdateRetail.billing = billing
      state.storeCurrentOrderUpdateRetail.fulfillment_info.customer = customer



    },
    upserveOrderCurrentOrderUpdateMamnoonEmail(state, { storeCurrentOrderUpdateMamnoonEmail }){
      state.storeCurrentOrderUpdateRetail.fulfillment_info.customer.email = storeCurrentOrderUpdateMamnoonEmail
    },
    upserveOrderCurrentOrderUpdate(state, { storeCurrentOrderUpdate }){
      state.storeCurrentOrderUpdate = storeCurrentOrderUpdate
    },
    upserveOrderCurrentOrderUpdateRetail(state, { storeCurrentOrderUpdateRetail }){
      state.storeCurrentOrderUpdateRetail = storeCurrentOrderUpdateRetail
    },
    upserveOrderCurrentOrderUpdateStreet(state, { storeCurrentOrderUpdateStreet }){
      state.storeCurrentOrderUpdateStreet = storeCurrentOrderUpdateStreet
    },
    upserveOrderCurrentOrderUpdateMamnoon(state, { storeCurrentOrderUpdateMamnoon }){
      state.storeCurrentOrderUpdateMamnoon = storeCurrentOrderUpdateMamnoon
    },
    upserveOrderCurrentOrderUpdateMamnoonTesting(state, { storeCurrentOrderUpdateMamnoonTesting }){
      state.storeCurrentOrderUpdateMamnoonTesting = storeCurrentOrderUpdateMamnoonTesting
    },
    upserveOrderCurrentOrderUpdateMbar(state, { storeCurrentOrderUpdateMbar }){
      state.storeCurrentOrderUpdateMbar = storeCurrentOrderUpdateMbar
    },
    reserveFamilyMeal (state, { timeslot }) {
      state.shoppingCartItems.push({timeslot: timeslot})
      state.cart = state.cart + 20
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = true
          break
        }
      }
    },
    removeUnreserve (state, { timeslot }) {
      state.cart = state.cart - 20
      state.shoppingCartItems = state.shoppingCartItems.filter(function (obj) {
        return obj.timeslot !== timeslot
      })
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = false
          break
        }
      }
    },
    unreserveFamilyMeal (state, { timeslot }) {
      state.cart = state.cart - 20
      state.shoppingCartItems = state.shoppingCartItems.filter(function (obj) {
        return obj.timeslot !== timeslot
      })
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = false
          break
        }
      }
    },
    completeCheckout (state, { shoppingCart }) {
      for (var i in shoppingCart) {
        for (var j in state.inventory.offerings[0].items[0].availableFamilyMeals) {
          if (state.inventory.offerings[0].items[0].availableFamilyMeals[j].timeslot === shoppingCart[i].timeslot) {
            state.inventory.offerings[0].items[0].availableFamilyMeals[j].amountRemaining--
            break
          }
        }
      }
      state.shoppingCartItems = []
      state.cart = 0
      for (var k in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        state.inventory.offerings[0].items[0].availableFamilyMeals[k].reserved = false
      }
    },
    async updateInventory(state, { inventoryAdd }){
  
      state.inventory.offerings = state.inventory.offerings.filter(function( obj ) {
        return obj.snipcart !== true;
      });

      state.inventory.offerings.push({
        visible: true,
        title: 'mama shop',
        category: 'mama-shop',
        responsive: true,
        caviarButton: false,
        snipcart: true,
        items: inventoryAdd,
        slideNo: 6,
        mamaShop: true
      })
  },
    showMessage () {
      console.log('this is th emesae')
    },
    updateCurrentUser(state, { currentUserInfo }){
      state.userInfo = currentUserInfo
    },
    endFirstTime(state){
      state.isFirstTime = false
    },
    setCurrentUserEmail(state, { currentUserEmail }){
      state.currentUserEmail = currentUserEmail
    },
    clearCurrentUser (state) {
      state.userInfo = null
      state.currentUserEmail = null
    },
    toggleVegetarian (state) {
      state.vegetarian = !state.vegetarian
    },
    hideUserModal (state) {
      state.userProfileModalVisible = false
    },
    showUserModal (state) {
      state.userProfileModalVisible = true
    },
async setPageData(state){

    let responseAcf = await base.get(`https://mamnoontogo.net/wp-json/acf/v3/virtual_restaurant/412`)



    let AcfBlock = responseAcf
    state.pageData = AcfBlock.data.acf.restaurants
    state.footer = AcfBlock.data.acf.restaurants[0].footer

  }

   
  }
})