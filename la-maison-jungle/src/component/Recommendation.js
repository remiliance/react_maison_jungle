function Recommendation(){
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <=5
    
    if (!isSpring) {
        return <div className='lmj-reco'>Ce n'est pas le moment</div>
    }
    return <div className='lmj-reco'>C'est le printemps!</div>
    
}
export default Recommendation