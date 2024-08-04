import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { tabs } from "./model/const";
import { useHash } from "@/shared/hooks/useHash.hooks";

const ProfileTabs = () => {
  const { handleTabChange, hash } = useHash();

  return (
    <Tabs value={hash} defaultValue={"orders"}>
      <TabsList>
        <div className="mx-auto max-w-[520px] px-4">
          <div className="grid grid-cols-3 gap-9 pb-[60px] max-tabletBig:gap-6 max-mobile:grid-cols-[1fr_0.8fr_1fr] max-mobile:gap-2 max-mobile:pb-[40px]">
            {tabs.map((tab) => {
              return (
                <TabsTrigger
                  key={tab.value}
                  className="tab-trigger text-[15px] font-medium uppercase text-[#7D7D7D] max-mobile:text-[13px]"
                  value={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                >
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </div>
        </div>
      </TabsList>

      {tabs.map((tab) => {
        const Component = tab.Content;

        return (
          <TabsContent key={tab.value} value={tab.value}>
            <Component />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export { ProfileTabs };
