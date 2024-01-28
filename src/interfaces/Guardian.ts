export interface Guardian {
  id: string,
  name: string,
  phoneNumber?: string,
  countryCode?: string,
  email?: string
}

export interface GuardianRequest {
  name?: string,
  phone_number?: string,
  country_code?: string,
  email?: string
};
