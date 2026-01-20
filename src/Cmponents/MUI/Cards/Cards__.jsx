import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from './Cards__.module.css';
import { useState } from 'react';
// import StyledWrapper from 'react-bootstrap/StyledWrapper'

export default function Cards__(apidatas) {

    console.log(apidatas)   


    return (


        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:25 }} >

            {
                apidatas.apidatas.map((e, i) => {
                    return (
                        <div key={i} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={e.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.title.slice(0,20)}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {e.description.slice(0,130)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <div>
                                        <button className={styled.button}>
                                            <div className={styled.buttonouter}>
                                                <div className={styled.buttoninner}>
                                                    <span>Share</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button className={styled.button_2}>
                                            <span>Hover me</span>
                                        </button>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })
            }

            {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <div>
                        <button className={styled.button}>
                            <div className={styled.buttonouter}>
                                <div className={styled.buttoninner}>
                                    <span>Share</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className={styled.button_2}>
                            <span>Hover me</span>
                        </button>
                    </div>
                </CardActions>
            </Card> */}
        </div>
    );
}
