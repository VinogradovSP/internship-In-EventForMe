import { User } from "@/types/user";
import { URL } from "@/constant";


export async function fetchAllUsers(): Promise<User[] | undefined> {
    let response = await fetch(`${URL}users/`)
  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.log(response);
  }
}

export async function fetchUserById(id: number): Promise<User | undefined> {
  let response = await fetch(`${URL}users/${id}/`, {
  method: 'GET',
  // headers: {
  //   // 'Accept': 'application/json',
  //   // 'Content-Type': 'application/json',
  // }
})
if (response.ok) {
  let result = await response.json();
  return result;
} else {
  console.log(response);
}
}