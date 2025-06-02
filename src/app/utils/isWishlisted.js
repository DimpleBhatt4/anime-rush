function isWishlist(wishlist, mal_id){
    return wishlist.some((item)=>item.mal_id === mal_id)
}

export default isWishlist