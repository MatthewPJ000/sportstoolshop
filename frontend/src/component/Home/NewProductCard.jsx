import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { FitScreen, LineWeight } from "@mui/icons-material";
import BasdProduct from "../../Image/products/bats/00001.jpg"
import {dispalyMoney  ,generateDiscountedPrice} from "../DisplayMoney/DisplayMoney"
import { addItemToCart } from "../../actions/cartAction";
import Rating from "@material-ui/lab/Rating";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    height: FitScreen,
    margin: theme.spacing(2),
    backgroundColor: "white",
    currsor: "pointer",
  },
  media: {
    height: 200,
    width: "90%",
    objectFit: "cover",
    margin : "1rem 1rem 0 1rem"
  },
  titleText: {
    fontWeight: 700,
    backgroundColor: '#6868ff',
    color: "white",
    borderRadius: '0 20px 20px 0',
    marginTop: '10px',
    width: '40%',
    paddingLeft: '1rem'
  },
  contentBox: {
    padding: '0.5rem 1rem'
  },
  ratingBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  oldBox: {
    display: 'flex',
    alignItems: "center"
  },
  discount: {
    fontSize: '12px',
    backgroundColor: "rgba(233, 240, 255)",
    borderRadius: '5px',
    padding: "3px"
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "rgba(0, 0, 0, 0.5)",
    marginRight: theme.spacing(1),
    fontSize: '16px',
    LineWeight: '0px',

  },
  finalPrice: {
    fontWeight: "bold",
    fontSize: "24px",
    LineWeight: '0px',
    color: 'black'
  },
  bottonBox: {
    marginTop: "20px",
    display: 'flex',
    alignItems: 'center', 
    justifyContent: "space-between"
  },
  cartButton: {
    backgroundColor: '#6868ff',
    color: 'white',
    borderRadius: '8px'
  }
}));

const NewProductCard = ({ product }) => {
  const classes = useStyles();
  let discountPrice = generateDiscountedPrice(product.price);
  discountPrice = dispalyMoney(discountPrice);
const oldPrice = dispalyMoney(product.price);

const truncated =
  product.description
    .split(" ")
    .slice(0, 5)
    .join(" ") + "...";
  const  nameTruncated = product.name.split(" ").slice(0, 3).join(" ") + "...";

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={BasdProduct} />
        <Typography
          gutterBottom
          color="black"
          fontWeight="bold"
          className={classes.titleText}
        >
          {product.name}
        </Typography>
        <Box className={classes.contentBox}>
          <Box className={classes.ratingBox}>
            <Rating
              name="rating"
              value={product.ratings}
              precision={0.1}
              readOnly
              size="small"
              style={{ color: "black", marginRight: 8, fontWeight: "400" }}
            />
            <Typography>
              <SmsOutlinedIcon fontSize="1rem" />
              <span style={{marginLeft: '5px', fontWeight: '600'}}>{product.numOfReviews}</span>
            </Typography>
          </Box>
          <Box className={classes.bottonBox}>
            <Box>
              <Box className={classes.oldBox}>
                <Typography variant="body1" className={classes.oldPrice}>
                  {oldPrice}
                </Typography>
                <Typography className={classes.discount}>-35%</Typography>
              </Box>
              <Typography variant="body1" className={classes.finalPrice}>
                {discountPrice}
              </Typography>
            </Box>
            <Box>
              <Button className={classes.cartButton}>
                <ShoppingCartCheckoutIcon  fontSize="large"/>
              </Button>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  )
};

export default NewProductCard;