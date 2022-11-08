const Buy_Cake='Buy_Cake';
const redux=require('redux');
const createStore=redux.createStore
function buyCake(val){
   return( {
        type:Buy_Cake,
        info:"Cake Shop",
        quantity:val
    })
}
const initialState={
    numOfCakes:10,
}
// reducer 
const reducer=(state=initialState,action)=>{
   switch (action.type) {
    case Buy_Cake:
        if(state.numOfCakes<action.quantity)
        {
            console.log("quantity is not available");
        }
        else{
    return{
        ...state,
        numOfCakes:state.numOfCakes-action.quantity,
    }}
    default:
       return state
   }
}
//create store
const store=createStore(reducer);
console.log("initial state",store.getState())
//subscribe Store
const unsubscribe=store.subscribe(()=>
    console.log("updated state",store.getState())
)
// dispatch store
store.dispatch(buyCake(5))
store.dispatch(buyCake(5))
store.dispatch(buyCake(5))
store.dispatch(buyCake(6))

unsubscribe()
