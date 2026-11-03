import { get, post, put } from "@/services/api/config";

export function GetAllCustomer (){
  return get({
    url: `/api/customer/all`,
  });
}
export default GetAllCustomer;
