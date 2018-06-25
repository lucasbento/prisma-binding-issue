export default {
  Mutation: {
    startChat: (parent: any, args: any, ctx: any, info: any) => {
      return ctx.db.mutation.createChat({
        data: {
          users: {
            connect: args.users.map((userId: any) => ({
              id: userId,
            })),
          }
        }
      }, info)
    },
    sendMessage: (parent: any, args: any, ctx: any, info: any) => {
      return ctx.db.mutation.createChatMessage({
        data: {
          text: args.text,
          user: {
            connect: {
              id: args.user,
            },
          },
          chat: {
            connect: {
              id: args.chat,
            },
          },
        },
      }, info);
    },
  },
  Subscription: {
    messages: {
      subscribe: (parent: any, args: any, ctx: any, info: any) => {
        return ctx.db.subscription.chatMessage(
          {
            where: {
              mutation_in: ['CREATED', 'UPDATED'],
            },
          },
          info,
        );
      },
    },
  }
};
