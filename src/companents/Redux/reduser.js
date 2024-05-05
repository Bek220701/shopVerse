export const initialState = {
  products: [],
  favorite: JSON.parse(localStorage.getItem("favo")) || [],
  search: {},
  basket: JSON.parse(localStorage.getItem("bas")) || [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_TO_FAVORITE":
      let favor = [...state.favorite, action.payload];
      localStorage.setItem("favo", JSON.stringify(favor));
      let findFav = state.favorite.find((el)=> el.id === action.payload.id)
      if (!findFav) {
        return {...state,favorite:[...state.favorite,action.payload]}
      }else{
        return state
      }
      
    case "DELETE_FAVORITE":
      let deleteFav = state.favorite.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem("favo", JSON.stringify(deleteFav));
      return { ...state, favorite: deleteFav };
    case "PRODUCT_SORT":
      if (action.payload === "cheap") {
        return {
          ...state,
          products: state.products.sort((a, b) => a.price - b.price),
        };
      } else if (action.payload === "expensive") {
        return {
          ...state,
          products: state.products.sort((a, b) => a.price - b.price),
        };
      } else if (action.payload === "A-Z") {
        return {
          ...state,
          products: state.products.sort((a, b) =>
            a.title.localeCompare(b.title)
          ),
        };
      } else if (action.payload === "Z-A") {
        return {
          ...state,
          products: state.products.sort((a, b) =>
            b.title.localeCompare(a.title)
          ),
        };
      } else if (action.payload === "rating") {
        return {
          ...state,
          products: state.products.sort((a, b) => b.rating - a.rating),
        };
      }
    case "FILTER_PRODUCT":
      if (action.payload === "2000") {
        return {
          ...state,
          products: state.products.filter(
            (el) => el.price >= 2000 && el.price <= 3000
          ),
        };
      } else if (action.payload === "4000") {
        return {
          ...state,
          products: state.products.filter(
            (el) => el.price >= 4000 && el.price <= 10000
          ),
        };
      } else if (action.payload === "20000") {
        return {
          ...state,
          products: state.products.filter(
            (el) => el.price >= 20000 && el.price <= 50000
          ),
        };
      } else if (action.payload === "50000") {
        return {
          ...state,
          products: state.products.filter(
            (el) => el.price >= 50000 && el.price <= 70000
          ),
        };
      }
    case "SEARCH":
      let findSearch = state.products.find((el) => el.title === action.payload);
      return { ...state, search: findSearch };
    case "ADD_TO_BASKET":
      action.payload.quantyti = 1;
      let res = [...state.basket, action.payload];
      localStorage.setItem("bas", JSON.stringify(res));
      let findBas = state.basket.find((el)=> el.id === action.payload.id)
      if (!findBas) {
        return {...state,basket:findBas}
      }else{ 
       return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantyti: el.quantyti + 1 }
            : el
        ),
      };
      }

      return { ...state, basket: [...state.basket, action.payload] };
    case "DELETE_BASKET":
      let deleBas = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("bas", JSON.stringify(deleBas));
      return {
        ...state,
        basket: deleBas,
      };
    case "QUAN_PLUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantyti: el.quantyti + 1 }
            : el
        ),
      };
    case "QUAN_MINUS":
      return  {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantyti: el.quantyti > 1 ? el.quantyti - 1 : 1 }
            : el
        ),
      };
    default:
      return state;
  }
};
