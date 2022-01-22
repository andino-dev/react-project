 export const reducer  = (state,action)=>{
     console.log(state.cart);
    switch (action.type) {
        case "CLEAR_CART":
            return {
                ...state,
                cart:[]
            }
        case 'REMOVE':
            return {
                ...state,
                 cart: state.cart.filter((cartItem)=> cartItem.id!==action.payload
            )} 
        case 'INCREASE':
           let tempCartI = state.cart.map((cartItem)=>{
               if(cartItem.id=== action.payload){
                   return {
                       ...cartItem,
                       amount: cartItem.amount +1
                   }
               }
               return  cartItem;
           })
           return {...state,cart:tempCartI}

        case 'DECREASE':
            let tempCartD = state.cart.map((cartItem)=>{
                if(cartItem.id=== action.payload){
                    return {
                        ...cartItem,
                        amount: cartItem.amount - 1
                    }
                }
                return cartItem
            }).filter((cartItem)=> cartItem.amount!==0);
            return {...state,cart:tempCartD};

        case 'TOGGLE_AMOUNT':
            let tempCartTA = state.cart.map((cartItem)=>{
                if( cartItem.id === action.payload.id){
                    if(action.payload.type==='inc'){
                        return {
                            ...cartItem,
                            amount:cartItem.amount +1 
                        }
                    }
                    if(action.payload.type === 'dec'){
                        return {
                            ...cartItem,
                            amount:cartItem.amount -1
                        }
                    }
                   
                }
                return cartItem;
            })
            .filter((cartItem)=> cartItem.amount!==0);
             return {...state,cart:tempCartTA}


        
        case 'LOADING':
            return {
                ...state,
                loading:true
            } 

        case 'DISPLAY_ITEMS':
            return{
                ...state,
                cart:action.payload,
                loading:false
            }  

        case 'GET_TOTALS':
            let {total,amount} = state.cart.reduce(
                (cartTotal,cartItem)=>{
                  const { price,amount} =cartItem;
                  const itemTotal = price*amount;
                  cartTotal.total += itemTotal;
                  cartTotal.amount +=amount;
                  return cartTotal;
            },{
            total:0,
            amount:0
            }
            ) 
            total = parseFloat(total.toFixed(2));
            return {...state,total,amount}
            default:
                return{}           
    }
}