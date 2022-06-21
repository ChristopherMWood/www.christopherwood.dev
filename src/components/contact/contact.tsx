import Popup from 'reactjs-popup';
import "./styles.scss";
import 'reactjs-popup/dist/index.css';

const ContactModal = (props: any) => (
  <Popup className='modal-popup' open={props.open} closeOnDocumentClick onClose={props.onClose} modal>
    <h2>Contact Me</h2>
    <input placeholder='Name' />
    <input placeholder='Email' />
    <textarea placeholder='Message content' />
    <button>Send</button>
    <button>Cancel</button>
  </Popup>
);

export default ContactModal;