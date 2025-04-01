import React, { useState } from 'react';
import styled from 'styled-components';
import { Question, Option, FormData } from '../types/types';

const questions: Question[] = [
  {
    id: 1,
    text: "Kuinka monta sivua tarvitset?",
    options: [
      { text: "1-3 sivua", value: 750 },
      { text: "4-6 sivua", value: 1400 },
      { text: "Yli 6 sivua", value: 2000 }
    ]
  },
  {
    id: 2,
    text: "Tarvitsetko sisällöntuotantoa?",
    options: [
      { text: "Ei, me toimitamme sisällöt", value: 0 },
      { text: "Kyllä, haluan apua", value: 1000 }
    ]
  },
  {
    id: 3,
    text: "Onko sinulla valmiina kuvat ja brändi-ilme?",
    options: [
      { text: "Kyllä", value: 0 },
      { text: "Ei, tarvitsen suunnittelua", value: 750 }
    ]
  },
  {
    id: 4,
    text: "Tarvitsetko sivuille ylläpito- tai jatkokehityspalvelua?",
    options: [
      { text: "En tarvitse", value: 0 },
      { text: "Kyllä, haluan jatkuvan tuen", value: 0 }
    ]
  },
  {
    id: 5,
    text: "Tarvitsetko analyysin nykyisestä hakunäkyvyydestä (SEO)?",
    options: [
      { text: "Kyllä", value: 500 },
      { text: "Ei", value: 0 }
    ]
  },
  {
    id: 6,
    text: "Tarvitsetko analyysin näkyvyydestä tekoälyökäluissa (AI-näkyvyys)?",
    options: [
      { text: "Kyllä, kiinnostaa", value: 350 },
      { text: "Ei", value: 0 }
    ]
  },
  {
    id: 7,
    text: "Tarvitsetko suunnitelman verkkosivujen liikenteen kasvattamiseksi?",
    options: [
      { text: "Kyllä, haluan konkreettisia keinoja", value: 500 },
      { text: "Ei", value: 0 }
    ]
  },
  {
    id: 8,
    text: "Tuleeko sivustollesi blogi?",
    options: [
      { text: "Kyllä", value: 0 },
      { text: "Ei", value: 0 }
    ]
  }
];

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Progress = styled.div`
  margin-bottom: 2rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin: 1rem 0;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background: ${({ theme }) => theme.gradients.nature};
  transition: width 0.3s ease;
`;

const StepInfo = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.brandBlack};
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.brandGreen};
    font-weight: bold;
  }
`;

const QuestionCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuestionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.brandBlack};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const OptionButton = styled.button<{ selected?: boolean }>`
  background: ${({ selected, theme }) =>
    selected ? theme.colors.brandGreen : theme.colors.white};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.white : theme.colors.brandBlack};
  border: 2px solid ${({ theme }) => theme.colors.brandGreen};
  border-radius: 4px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.brandGreen};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const TotalPrice = styled.div`
  background: ${({ theme }) => theme.gradients.nature};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: ${({ theme }) => theme.colors.brandBlack};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SummaryCard = styled(QuestionCard)`
  h2 {
    color: ${({ theme }) => theme.colors.brandGreen};
    margin-bottom: 2rem;
  }
`;

const SummaryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  &:last-child {
    border-bottom: none;
  }

  span {
    &:last-child {
      font-weight: bold;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brandGreen};
  }
`;

const SubmitButton = styled(NavButton)`
  background: ${({ theme }) => theme.colors.brandGreen};
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`;

const ResetButton = styled(NavButton)`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.brandBlack};
  margin-top: 1rem;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const PriceCalculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    pageCount: null,
    contentCreation: null,
    visualDesign: null,
    maintenance: null,
    seoAnalysis: null,
    aiVisibility: null,
    trafficGrowth: null,
    blog: null,
  });
  const [showSummary, setShowSummary] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleOptionSelect = (option: Option) => {
    const currentQuestion = questions[currentStep];
    setFormData((prev) => ({
      ...prev,
      [getFormDataKey(currentQuestion.id)]: option,
    }));

    if (currentStep === questions.length - 1) {
      setShowSummary(true);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const getFormDataKey = (questionId: number): keyof FormData => {
    const keys: { [key: number]: keyof FormData } = {
      1: 'pageCount',
      2: 'contentCreation',
      3: 'visualDesign',
      4: 'maintenance',
      5: 'seoAnalysis',
      6: 'aiVisibility',
      7: 'trafficGrowth',
      8: 'blog'
    };
    return keys[questionId];
  };

  const calculateTotal = (): number => {
    return Object.values(formData).reduce((total, option) => {
      return total + (option?.value || 0);
    }, 0);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tässä voisi lähettää tiedot eteenpäin
    console.log('Contact info:', contactInfo);
  };

  const handleReset = () => {
    setFormData({
      pageCount: null,
      contentCreation: null,
      visualDesign: null,
      maintenance: null,
      seoAnalysis: null,
      aiVisibility: null,
      trafficGrowth: null,
      blog: null,
    });
    setCurrentStep(0);
    setShowSummary(false);
    setContactInfo({
      name: '',
      email: '',
      phone: '',
      company: '',
    });
  };

  const renderSummary = () => {
    return (
      <SummaryCard>
        <h2>Yhteenveto valinnoistasi</h2>
        <SummaryList>
          {questions.map((question) => {
            const answer = formData[getFormDataKey(question.id)];
            return (
              <SummaryItem key={question.id}>
                <span>{question.text}</span>
                <span>{answer?.text || 'Ei valittu'}</span>
              </SummaryItem>
            );
          })}
          <SummaryItem>
            <span>Kokonaishinta</span>
            <span>{calculateTotal()} €</span>
          </SummaryItem>
        </SummaryList>

        <ContactForm onSubmit={handleContactSubmit}>
          <h3>Jätä yhteystietosi tarjousta varten</h3>
          <Input
            type="text"
            placeholder="Nimi"
            value={contactInfo.name}
            onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
            required
          />
          <Input
            type="email"
            placeholder="Sähköposti"
            value={contactInfo.email}
            onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
            required
          />
          <Input
            type="tel"
            placeholder="Puhelinnumero"
            value={contactInfo.phone}
            onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
          />
          <Input
            type="text"
            placeholder="Yritys"
            value={contactInfo.company}
            onChange={(e) => setContactInfo(prev => ({ ...prev, company: e.target.value }))}
          />
          <ButtonGroup>
            <SubmitButton type="submit">Lähetä tarjouspyyntö</SubmitButton>
            <ResetButton type="button" onClick={handleReset}>
              Aloita alusta
            </ResetButton>
          </ButtonGroup>
        </ContactForm>
      </SummaryCard>
    );
  };

  return (
    <Container>
      {!showSummary ? (
        <>
          <Progress>
            <StepInfo>
              Vaihe <span>{currentStep + 1}</span> / {questions.length}
            </StepInfo>
            <ProgressBar>
              <ProgressFill progress={progress} />
            </ProgressBar>
          </Progress>

          {currentQuestion && (
            <QuestionCard>
              <QuestionTitle>{currentQuestion.text}</QuestionTitle>
              <OptionsGrid>
                {currentQuestion.options.map((option) => (
                  <OptionButton
                    key={option.text}
                    selected={formData[getFormDataKey(currentQuestion.id)]?.text === option.text}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.text}
                  </OptionButton>
                ))}
              </OptionsGrid>
              <NavigationButtons>
                <NavButton 
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  Edellinen
                </NavButton>
                <NavButton 
                  onClick={handleNext}
                  disabled={!formData[getFormDataKey(currentQuestion.id)] || isLastQuestion}
                >
                  {isLastQuestion ? 'Näytä yhteenveto' : 'Seuraava'}
                </NavButton>
              </NavigationButtons>
              <ResetButton onClick={handleReset}>
                Aloita alusta
              </ResetButton>
            </QuestionCard>
          )}

          <TotalPrice>
            <h3>Kokonaishinta-arvio</h3>
            <p>{calculateTotal()} €</p>
          </TotalPrice>
        </>
      ) : (
        renderSummary()
      )}
    </Container>
  );
};

export default PriceCalculator; 