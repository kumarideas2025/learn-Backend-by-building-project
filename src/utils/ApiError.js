class ApiError extends Error{
    constructor (
      statusCode,
      message= "Something went wrong",
      errors= [],
      stack = ""
    ){
        //overriding...
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message =message
        this.success= false // api error handle , not api response
        this.errors = errors
        

        if (stack ) {
            this.stack = stack 
        }
        else{
            // this is node.js automatic built-in methods. it says where is the error.
            Error.captureStackTrace(this, this.constructor)
        }
     }
}

export {ApiError}