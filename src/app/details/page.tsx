const DetailsPage = () => {
  return (
    <section className="h-full pb-9 pt-[calc(var(--header-height)_+_48px)] max-mobile:min-h-[100svh] max-mobile:pb-4 max-mobile:pt-[calc(var(--header-height)_+_36px)]">
      <div className="container space-y-6">
        <h1 className="text-3xl font-semibold">Реквизиты</h1>

        <div className="space-y-3 text-base leading-relaxed">
          <p>
            <strong>ИП:</strong> Луговской А.В.
          </p>
          <p>
            <strong>Юридический адрес:</strong> г. Краснодар, ул. им. Василия
            Гассия, 6/1, кв. 37
          </p>
          <p>
            <strong>ИНН:</strong> 231216119975
          </p>
          <p>
            <strong>ОГРНИП:</strong> 324237500160113
          </p>
          <p>
            <strong>Телефон:</strong>{" "}
            <a href="tel:+79883609506" className="text-primary hover:underline">
              +7 988 360-95-06
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
