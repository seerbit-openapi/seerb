const keyObj = {
  key:
    "SBTESTSECK_7jeDFlzalyjx4ACQXIkOCZxxT2IDLg4OCutFcAyr.SBTESTPUBK_56ZwUcOOfjZrL8I9Shc3v42QWtyT5DD9"
};

export const generateEncryptedKey = async () => {
  try {
    let response = await fetch(`https://seerbitapi.com/api/v2/encrypt/keys/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(keyObj)
    });
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const seerBitPay = async () => {
  try {
    let response = await fetch(
      `https://checkout.seerbitapi.com/api/v1/seerbit.js`,
      {
        body: JSON.stringify({
          tranref: new Date().getTime(),
          currency: "NGN",
          description: "TEST",
          country: "NG",
          amount: "100.00",
          callbackurl: "http://yourdomain.com",
          public_key: "SBTESTPUBK_56ZwUcOOfjZrL8I9Shc3v42QWtyT5DD9"
        })
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
