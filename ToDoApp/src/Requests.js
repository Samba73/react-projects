const Requests = async(url='', options=null, errMessage=null) => {
    console.log('url is', url)
    console.log('options', options)
    try{
        const response = await fetch(url, options)
        console.log(response)
        if (response.status !== 200) throw new Error("Please reload data")
    } catch(err){
        errMessage = err.Message
    } finally {
        return errMessage
    }
}
export default Requests
