

export interface Message {
  uid?: string;
  message: string;
  closed?: number;
  name : string;
}

/* export const MessageConverter: Converter<Message> = {
  toFirestore: (doc) => doc,
  fromFirestore: (snapshot, options) => {
    const obj = snapshot.data(options)!;

    return {
      ...obj,
      createdAt: obj['createdAt']?.toDate(),
    } as Message;
  },
}; */