import styles from "@/styles/main/Main.module.scss";
import Container from "react-bootstrap/Container";
import ImageLoader from "@/components/_finder/ImageLoader";
import Link from "next/link";
import RegisterBtn from "@/components/main/registerBtn/registerBtn";
import Card from 'react-bootstrap/Card'
import {steps} from "@/mocks/moreServices";

function MoreServices(): JSX.Element {
    return (
        <Container as='section' className="mx-auto w-75">
            <section className={styles.my124 + ' pt-2 pt-sm-0 pb-md-2'}>

                <div className="row">
                    <div className="col">
                        <div className='pt-2 pt-sm-0 pb-md-2 w-75'>
                            <h2 className={styles.main__subtitle}>
                                Получите больше услуг в личном кабинете
                            </h2>
                            <p className={styles.more_services__description}>Elementum magna ac tempor, facilisis tristique mauris. Et penatibus sit sed in ante in ultrices. Senectus aliquam dictum eleifend mi pharetra morbi.</p>
                            <RegisterBtn/>
                        </div>
                    </div>
                    <div className="col">
                    <ImageLoader src='/img/group.png' width={701} height={380.41}
                                alt={'more services'}/>
                    </div>
                </div>
                <section className="row mt-3">
                    {steps.map((step,index)=>(
                        <Card className='card-hover border-0 mx-2 col' key={index}>
                            <Card.Body>
                                <h2 className={styles.step + " text-info"}>0{index+1}</h2>
                                <h5 className={styles.step__title}>{step.title}</h5>
                                <p className={styles.step__description}>{step.description}</p>
                            </Card.Body>
                        </Card>
                    ))}

                </section>
            </section>
        </Container>
    )
}

export default MoreServices;