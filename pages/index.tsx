const Home = () => {
  return (
    <div className="text-center leading-8">
      <header className="flex items-center justify-center bg-jose-rizal bg-cover bg-fixed h-screen bg-center">
        <h1 className="font-bold text-9xl">Jose Rizal</h1>
      </header>
      <main>
        <section className="p-20 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-10">Early life</h2>
          <p>
            Born 40 miles south of Manila at Calamba, into a prominent Filipino
            family, José was the seventh of 11 children. Taught first by his
            cultured mother, and later by private tutors, the young Rizal grew
            up in an intellectually stimulating atmosphere. His brother and
            sisters were all well-educated and his family's private library, of
            more than 1000 volumes, was quite possibly the largest in the
            Philippines at that time. Rizal was an extremely gifted student,
            especially in the humanities. He won literary competitions from a
            young age. He had an extraordinary capacity for language;
            ultimately, he spoke 22 languages and dialects. His professor of
            Greek in Spain said that he never encountered a student who excelled
            Rizal. Additionally, he studied drawing, painting, and sculpture,
            throughout his life; he even exhibited a bust at the Salon de Paris
            in 1889.
          </p>
        </section>
        <section className="p-20 mx-auto max-w-7xl bg-philippine-flag bg-fixed">
          <h2 className="text-3xl font-bold mb-10">Education</h2>
          <div className="p-10 rounded-3xl bg-white/10 backdrop-blur-lg">
            <p className="mb-10">
              Rizal received his secondary education at the Ateneo Municipal of
              Manila, where he was a star pupil. On graduation from the Ateneo,
              he won first prizes in 5 academic subjects, and his bachelor of
              arts degree was conferred from Santo Tomas University (the only
              institution in the Philippines authorized to grant academic
              degrees). From 1879 to 1882, he studied medicine, agriculture,
              surveying, and philosophy and letters at Santo Tomas University in
              Manila. Dissatisfied with his education there, due in part to the
              prejudices of faculty against native students, he continued his
              studies in Spain. In 1884, Rizal completed licentiates in medicine
              and in philosophy and letters at the Central University of Madrid.
              (The licentiate is an undergraduate degree similar to the American
              bachelor's degree but with a more vocational focus. Further
              medical education was not required to call oneself a physician or
              to practice medicine at that time. However, one could obtain a
              doctoral degree, similar to a contemporary American doctoral
              degree, after passing examinations and writing an approved
              thesis.)
            </p>
            <p className="mb-10">
              Rizal kept meticulous notes of his clinical experiences in Madrid.
              His clinical and surgical notes contain details of lectures and
              case histories. The case reports include the patients' history,
              physical findings, diagnosis, differential diagnosis, and
              treatment, including prescriptions, diet, course, and even autopsy
              findings. Rizal recorded opinions of professors on the cases as
              well as his own observations. Some comments show his awareness of
              inadequacies in the system with an ironic sense of humor: "The San
              Carlos clinic which prints a seal of infection to every wound."
            </p>
            <p className="mb-10">
              Although Rizal completed a thesis for his doctorate in medicine,
              he did not technically receive this degree, since he did not
              appear to read his thesis aloud as required by the Central
              University of Madrid. At the time Rizal completed the thesis, he
              was already studying ophthalmology in Germany. Reading his thesis
              in Madrid would have required an additional trip to Spain, which
              Rizal could not afford. Instead, he mailed his thesis to the
              university and hoped for its acceptance in this manner.
            </p>
          </div>
        </section>
        <section className="p-20 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-10">Political activism</h2>
          <p className="mb-10">
            During his studies in Europe, Rizal was also working on his first
            novel, Noli Me Tangere. Through the medium of fiction, he portrayed
            a vivid and realistic picture of the social conditions in the
            Philippines. According to his own explanation:
          </p>
          <blockquote className="bg-neutral-200 p-10 mx-auto max-w-2xl rounded-3xl flex text-left mb-10">
            <div className="w-8 bg-white mr-10"></div>
            Noli me tangere, a phrase taken from the Gospel of St. Luke, means
            "touch me not." The book contains things that nobody in our country
            has spoken of until the present. They are so delicate that they
            cannot be touched by anyone.. . . I have attempted to do what nobody
            had wished to do. I have replied to the calumnies that for so many
            centuries have been heaped upon us and our country. . . . I have
            unmasked the hypocrisy that under the cloak of religion has
            impoverished and brutalized us. . . . I have lifted the curtain in
            order to show what is behind the deceitful and dazzling promises of
            our government.
          </blockquote>
          Under Spanish rule, the Filipinos were treated as inferiors and were
          subject to numerous inequities, with little recourse. Once, as a young
          man, Rizal did not recognize a lieutenant of the civil guard in the
          dark of night and was beaten for failing to salute him. The outraged
          Rizal journeyed to Manila to report the incident and obtain redress,
          but the governor general would not receive him. Even more bewildering
          was Rizal's mother's experience with the Spanish justice system. When
          faced with a preposterous charge of an angry cousin, she received no
          assistance from Spanish officials, whom the Rizals had entertained in
          their home and had considered friends. On the contrary, she was
          humiliated by being forced to walk 20 miles to prison, where she spent
          2½ before being acquitted. These events and Rizal's observations from
          his youth undoubtedly made a profound impact on the formation of his
          political thought and inspired his descriptions in Noli Me Tangere.
        </section>
        <section className="p-20 mx-auto max-w-7xl bg-volcano bg-fixed bg-cover">
          <h2 className="text-3xl font-bold mb-10">Conclusion</h2>
          <div className="p-10 rounded-3xl bg-white/10 backdrop-blur-lg">
            <p className="mb-10">
              Rizal has become a symbol of the Philippine struggle for
              independence, and he is known there as the national hero. December
              30, the date of Rizal's execution in 1896, is celebrated as a
              national holiday in the Philippines. The Jose Rizal College was
              dedicated to his honor in Manila in 1919. There are commemorative
              monuments to Rizal in Manila near the site of his execution in
              Luneta Park, in his hometown and most Filipino towns, in Heidelberg,
              and Chicago. His portrait appears on the Filipino 2-peso bill. The
              region around Manila, including his hometown of Calamba, was
              designated a province and named Rizal. His novels are required
              reading for Filipino high school students. Jose Rizal can perhaps be
              best summarized using his own words from the poem he wrote from his
              cell the night before execution. One of the last stanzas of "Ultimo
              Adios" (Final Farewell) shows his selfless devotion to his country,
              his loyalty to his family, his deep spirituality despite criticism
              of the church, and his artistic grace.
            </p>
          </div>
        </section>
      </main>
      <footer className="p-5 text-neutral-500">
        <p className="text-sm">by Angelo</p>
      </footer>
    </div>
  );
};

export default Home;
