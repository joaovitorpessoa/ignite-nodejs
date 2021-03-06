import	{	NextFunction,	Request,	Response	}	from	"express";
import	{	verify	}	from	"jsonwebtoken";

import	{	AppError	}	from	"../errors";
import	{	UsersRepository	}	from	"../modules/accounts/repositories";

interface	IPayload	{
		sub:	string;
}

async	function	ensureAuthenticated(
		request:	Request,
		response:	Response,
		next:	NextFunction
)	{
		const	authHeader	=	request.headers.authorization;

		if	(!authHeader)	{
				throw	new	AppError("Token	missing!",	401);
		}

		const	[,	token]	=	authHeader.split("	");

		try	{
				const	decodedToken	=	verify(
						token,
						"f34fa5ab9805c87d7a19050d14486e82"
				)	as	IPayload;

				const	{	sub:	userId	}	=	decodedToken;

				const	usersRepository	=	new	UsersRepository();

				const	user	=	usersRepository.findById(userId);

				if	(!user)	{
						throw	new	AppError("User	does	not	exists!",	401);
				}

				request.user	=	{
						id:	userId,
				};

				next();
		}	catch	{
				throw	new	AppError("Invalid	token!",	401);
		}
}

export	{	ensureAuthenticated	};
