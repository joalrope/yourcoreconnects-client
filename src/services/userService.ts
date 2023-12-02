import { IProvider } from "../components/forms/auth/provicer-form/interfaces";
import { fetchWithToken } from "../helpers/fetch";

export const getUserById = async (id: string) => {
  const result = await fetchWithToken(`/users/${id}`);

  return result;
};

export const getInactiveUsers = async () => {
  const result = await fetchWithToken(`/users/inactive?from=0&limit=0`);

  return result;
};

export const getUserByServices = async (services: string[]) => {
  /*if (services.length > 1) {*/
  const query = services.reduce((queryString, service) => {
    return queryString + `services=${service}&`;
  }, "");

  return await fetchWithToken(`/users/services?${query}`);
  /*}

  return await fetchWithToken(`/search/users/${services[0]}`);*/
};

export const updateUserById = async (
  id: string | undefined,
  data: IProvider
) => {
  const result = await fetchWithToken(`/users/${id}`, data, "PUT");

  return result;
};

export const updateUserContactsById = async (
  id: string | undefined,
  contact: string
) => {
  const result = await fetchWithToken(
    `/users/contacts/${id}`,
    { contact },
    "PUT"
  );

  console.log({ result });

  return result;
};

export const clearNotificationsById = async (
  receiverId: string,
  senderId: string
) => {
  const result = await fetchWithToken(
    `/users/notifications/${receiverId}/clear/${senderId}`,
    {},
    "PUT"
  );

  return result;
};

export const getUserMessagesById = async (
  senderId: string,
  receiverId: string
) => {
  const result = await fetchWithToken(
    `/users/messages/${senderId}/${receiverId}`
  );

  return result;
};
