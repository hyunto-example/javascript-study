import Constant from '../Constant';

// 상태를 변경하는 기능만 구현합니다.
export default {
    // ** vue-router 적용에 따라 삭제 **
    // [Constant.ADD_CONTACT_FORM]: (state, payload) => {
    //     state.contact = {
    //         no: '',
    //         name: '',
    //         tel: '',
    //         address: '',
    //         photo: ''
    //     };
    //     state.mode = "add";
    //     state.currentView = "contactForm";
    // },
    // [Constant.CANCEL_FORM]: (state, payload) => {
    //     state.currentView = null;
    // },
    // [Constant.EDIT_CONTACT_FORM]: (state, payload) => {
    //     state.contact = payload.contact;
    //     state.mode = 'update';
    //     state.currentView = "contactForm";
    // },
    // [Constant.EDIT_PHOTO_FORM]: (state, payload) => {
    //     state.contact = payload.contact;
    //     state.currentView = "updatePhoto";
    // },
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
        state.contact = payload.contact;
    },
    [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
        state.contact = {
            no: '',
            name: '',
            tel: '',
            address: '',
            photo: ''
        }
    }
}