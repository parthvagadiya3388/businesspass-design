import Logo from "../assets/image/Logo.png";

export default function EmailInvitation() {
  return (
    <div style={{ minHeight: "100vh", margin: '0', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "" ,fontFamily:"Plus Jakarta Sans" }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        padding: "16px",
        margin: "auto",
        backgroundColor: "",
        border: "1px solid",
        boxSizing: 'border-box',
        borderRadius:"20px"
      }}>
        <nav>
          <div style={{ textAlign: "center" }}>
            <a href="#" style={{ marginLeft: '10px' }}>
              <img src={Logo} alt="Logo" style={{ width: '100%', maxWidth: '220px', height: "auto" }} />
            </a>
          </div>
        </nav>
        <hr />
        <div style={{ width: '100%', maxWidth: '560px', margin: "auto", boxSizing: 'border-box' }}>
          <div style={{ height: 'auto', gap: "30px" }}>
            <h3>Jenny Wilson</h3>
            <p style={{ marginBottom: "0px" }}>Welcome to Businesspass.</p>
            <p style={{ marginBottom: "0px" }}>You've been invited as a <strong>Cowork Admin</strong></p>
          </div>
          <br />
          <div style={{ gap: "20px" }}>
            <p>Please read the below details to confirm your account and set your password.</p>
            <a href="http://localhost:5173/cowork-registration" style={{ display: 'block', wordWrap: 'break-word' }}>https://businesspass.eu/verify_user/9d2027af7b202f67ec1adacd6
            </a>
            <p>(Copy above link and paste it in your browser to confirm and set password)</p>
            <h4 style={{ textAlign: "center" }}>OR</h4>
            <p style={{ textAlign: 'center', margin: '20px' }}>
              <a href="http://localhost:5173/cowork-registration" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#ffffff', textDecoration: 'none', borderRadius: '0px' }}>
                Click here to Confirm your email
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div style={{ width: '100%', maxWidth: '560px', backgroundColor: "", boxSizing: 'border-box' }}>
          <nav style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <div style={{width:"140px"}}>
              <a href="#" style={{ marginLeft: '10px' }}>
                <img src={Logo} alt="Logo" style={{ width: '100%', maxWidth: '220px', height: "auto" }} />
              </a>
            </div>
            <div style={{ width:"150" , display: "", justifyContent: "space-between", gap: '10px' }}>
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="Facebook" style={{ width: "30px", height: "30px" }} />
              <img src="https://avatars.mds.yandex.net/i?id=465c7785ce0b382515d1a5a6ab5514f259414ac8-10599899-images-thumbs&n=13" alt="Icon" style={{ width: "30px", height: "30px" }} />
              <img src="https://avatars.mds.yandex.net/i?id=6fb60e617ad88109ccdec2e3df221e592b6da224-10995124-images-thumbs&n=13" alt="Icon" style={{ width: "30px", height: "30px" }} />
              <img src="https://avatars.mds.yandex.net/i?id=99b51608d43ec6d453dd657d65927e0ce7f578c2-12422342-images-thumbs&n=13" alt="Icon" style={{ width: "30px", height: "30px" }} />
            </div>
          </nav>
          <hr />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#888888', margin: '0' }}>© 2023 Relume. All rights reserved.</p>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#888888', margin: '0' }}>
            <a href="#" style={{ color: '#888888', textDecoration: 'none', margin: '0 5px' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#888888', textDecoration: 'none', margin: '0 5px' }}>Terms of Service</a>
            <a href="#" style={{ color: '#888888', textDecoration: 'none', margin: '0 5px' }}>Cookies Settings</a>
          </p>
        </div>
      </div>
    </div>
  );
}
