let reviews = [
    {
        comment: "Black Mirror is one of the most original and best Mini-Series ever created! Each episode tells a different story and while not all, most of them are fascinating. There are a few that are not so good when compared to the others but most of them are fantastic! It's hard to explain how incredible this show is so just go watch it!",
        rating: 5
    },
    {
        comment: "-1 because of that Season 5 that I wished I never knew existed.",
        rating: 4
    },
    {
        comment: "If you watch this whole series...you can see the reality of it...and it's horrifying. I believe that this series really makes you think about how easily and fast things can get out of control. It was an awesome show!",
        rating: 5
    },
];

const reviewList = document.getElementById("review-list");
// console.log(reviewList);
const reviewForm = document.getElementById("review-form");


reviews.forEach ((r) => AddReview(r));
CalculateAvg();

reviewForm.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData (reviewForm);
    const review =    {
        comment: formData.get("review-txt"),
        rating: formData.get("rating")
    };
    reviews.push(review);
    AddReview(review);
    reviewForm.reset();
    CalculateAvg();
});


function AddReview(r)
{
    // console.log(r);
    let litem = document.createElement("li");
    let com = document.createElement("div");
    let rat = document.createElement("div");

    litem.classList.add("listI")
    com.classList.add("commentC");
    rat.classList.add("ratingR");

    com.textContent=r.comment;
    rat.textContent=r.rating+"/5";

    litem.appendChild(com);
    litem.appendChild(rat);
    reviewList.appendChild(litem);
};

function CalculateAvg()
{
    let ratingSum=0;
    reviews.forEach(function(r){
        ratingSum+=parseFloat(r.rating);
    });
    console.log(ratingSum);

    let avgRating=ratingSum/reviews.length;
    avgRating = Math.round(avgRating*100)/100;
    let avgdiv = document.getElementById("avg-rating");
    avgdiv.textContent="Average rating: " + avgRating;
    avgdiv.classList.add("avgC");
    // console.log(avgRating);
    //add to an element
};


