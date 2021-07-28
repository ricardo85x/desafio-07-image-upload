import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}


interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE
  const [selectedImage,setSelectedImage] = useState<string>("")

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (url: string) => {
    setSelectedImage(url)

    onOpen()

    // ModalViewImage({isOpen, onClose, imgUrl: selectedImage})

  }

  return (
    <SimpleGrid columns={3} spacing="40px">
      {
        /* TODO CARD GRID */
        cards.map(((card, i) => <Card key={i} data={card} viewImage={() => handleViewImage(card.url)} /> ))
      }

      {
        /* TODO MODALVIEWIMAGE */ 
        <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImage}/>
      }
    </SimpleGrid>
  );
}
