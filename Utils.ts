const baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL || "";

if (baseUrl == "") {
  console.log("Url is empty");
}

export default baseUrl;
