import { Button } from "@/components/ui/button";

const NewItems = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1307px] px-4">
        <h3 className="mb-5 text-2xl font-bold uppercase">новинки</h3>

        <div>
          <div></div>

          <div>
            <div></div>

            <Button className="mx-auto w-fit" variant={"default"}>
              все новинки
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewItems };
