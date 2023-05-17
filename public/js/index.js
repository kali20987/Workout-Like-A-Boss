const reviewSubmission = async (event) => {
     event.preventDefault();

    const reviewValue = document.getElementById('review-input').value.trim();
    console.log(reviewValue);
    const usernameValue = document.getElementById('usernameInput').value.trim();
    console.log(usernameValue);

    const post = await fetch('/api/review', {
        method: "POST",
        body: JSON.stringify({
            reviewcontent: reviewValue,
            username: usernameValue,
        }),
        headers: { 'Content-Type': 'application/json' },
    })


    if(post.ok) {
        alert("Your review has been sent. Thank you!");
    } else {
        alert('Something went wrong');
    }
    
}

document.getElementById('userReview')
.addEventListener('click', reviewSubmission);