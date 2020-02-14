const domain = 'https://connect.facebook.net'

const loadScript = () => {
  console.log('loadScript');
  if (window.FB) return

  ! (function loadFacebookSDK(d, s, id) {
    var fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    var chat = d.createElement('div');
    chat.className = "fb-customerchat";
    chat.setAttribute("page_id", "227685837266552");
    d.body.appendChild(chat);
    var js = d.createElement(s);
    js.id = id;
    js.src = `${domain}/zh_TW/sdk/xfbml.customerchat.js`;
    if (fjs) {
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      d.body.appendChild(js);
    }
  })(window.document, 'script', 'facebook-jssdk');
}

const load = ({ providerKey }) => {
  loadScript();
  window.fbAsyncInit = function() {
    window.FB.init({
      appId: providerKey,
      cookie: true,
      xfbml: true,
      version: 'v3.2'
    });
    console.log("init")
  };
}

const open = () => {
  console.log("open")
  window.FB.CustomerChat.showDialog();

}
const close = () => {
  console.log("close")
  window.FB.CustomerChat.hideDialog();
}

export default {
  domain,
  load,
  open,
  close
}