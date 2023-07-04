const Requests = async(url='', options=null, errMessage=null) => {
    try{
        const response = await fetch(url, options)
        if (response.status !== 200) throw new Error("Please reload data")
    } catch(err){
        errMessage = err.Message
    } finally {
        return errMessage
    }
}
export default Requests
