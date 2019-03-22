import {ARM} from '../../assets/languages/languages';
const initialState={
activeLanguage:ARM
}
export default function other(state = initialState, action) {

  switch (action.type) {
    case "languageChange": state.activeLanguage=action.payload;
        return {...state}

    default:
    return state;
  }

}
