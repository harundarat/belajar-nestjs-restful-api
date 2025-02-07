export class ContactResponse {
  id: number;
  username: string;
  first_name: string;
  last_name: string | null;
  email: string | null;
  phone: string | null;
}

export class CreateContactRequest {
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export class UpdateContactRequest {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export class SearchContactRequest {
  name?: string;
  email?: string;
  phone?: string;
  page: number;
  size: number;
}
