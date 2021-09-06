import {Container, Title, Footer, Description, Star, Lang, UpdateTime, License} from "./StyledCompnents";
import {AiFillStar, AiTwotoneCheckCircle} from "react-icons/ai";
import {getLastUpdated, getLicense} from "../../utils";

type CardProps = {
    full_name: string;
    description: string;
    stargazers_count: number;
    license: any; // refactor
    updated_at: string;
    language: string;
}

const Card = (props: CardProps) => {
    const {full_name = "", description = "", stargazers_count = 0, license = "", updated_at = "", language = ""} = props;
    return <Container>
        <Title>
            {full_name}
        </Title>
        <Description>
            {description}
        </Description>
        <Footer>
            <Star><AiFillStar />{stargazers_count}</Star>
            <Lang><AiTwotoneCheckCircle />{language}</Lang>
            <License>{getLicense(license)}</License>
            <UpdateTime>{getLastUpdated(updated_at)}</UpdateTime>

        </Footer>
    </Container>
};


export default Card;