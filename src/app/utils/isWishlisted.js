function isWishlist(wishlist, mal_id){
    console.log("true/falde", wishlist.some((item)=>item.mal_id === mal_id))
    return wishlist.some((item)=>item.mal_id === mal_id)
}

export default isWishlist