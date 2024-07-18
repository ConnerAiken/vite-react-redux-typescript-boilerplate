import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  useNewDeckQuery, 
  useLazyDrawCardsQuery 
} from "./../../redux/services/example";
import "./home.scss"; 

const Welcome = () => {
    const { data: deck, isLoading: isFetchingDeck } = useNewDeckQuery({});
    const [drawTrigger] = useLazyDrawCardsQuery();
    const [data, setData] = useState<any[]>([]);

    const handleBtnClick = async () => {
        const res = await drawTrigger({ deck_id: deck?.deck_id, card_count: 2 });
        setData(res.data.cards); 
    }
  return (
    <>
      <Container
        id="welcome-route"
        className="h-screen flex align-items-center justify-content-center"
        fluid
          >
              <h4>Welcome</h4>
              {!isFetchingDeck && (
                  <pre>
                      {JSON.stringify(deck, null, 2)}
                  </pre>
              )}
              {data && (
                  <pre>
                      {JSON.stringify(data, null, 2)}
                  </pre>
              )}
              <button onClick={handleBtnClick}>
                  Draw Cards
              </button>
      </Container>
    </>
  );
};

export default Welcome;
