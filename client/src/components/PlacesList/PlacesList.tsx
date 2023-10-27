import Card from "../ui/Card";
import classes from "./PlacesList.module.css";
const DUMMY_DATA = [
  {
    id:1,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
  {
    id:2,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
  {
    id:3,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
  {
    id:4,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
  {
    id:5,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
  {
    id:6,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
  {
    id:7,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
  {
    id:8,
    img: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720",
    place: "Stage, Denmark",
    rating: 5,
    price: 496,
    availability: "Nov 4 - 9",
  },
];

const PlacesList = () => {
  return (
    <>
      {DUMMY_DATA.map((home) => {
        return (
          <Card key={home.id }>
            <img className={classes.image} src={home.img} />
            <div className={classes.info}>
              <p>{home.place}</p>
              <span>{home.rating}</span>
              <p>{home.availability}</p>
              <p>$ {home.price}</p>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default PlacesList;
