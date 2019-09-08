const postData = async data => {
  try {
    const res = await fetch(
      "https://reform.helsi.me/signer/register-document",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );
    return await res.json();
  } catch (error) {
    return console.error(error);
  }
};

export default postData;
