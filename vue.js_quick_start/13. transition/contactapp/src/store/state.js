import CONF from '../Config';

export default {
    // currentView: null,
    // mode: 'add',
    isloading: false,
    contact: {
        no: 0,
        name: '',
        tel: '',
        address: '',
        photo: ''
    },
    contactlist: {
        pageno: 1,
        pagesize: CONF.PAGESIZE,
        totalcount: 0,
        contacts: []
    }    
}