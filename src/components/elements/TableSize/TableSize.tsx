import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableSize = () => {
  return (
    <Table className="bg-[#EEEEEE] text-[12px] text-[#666666] max-mobileSmall:w-[467px] desktop:max-w-[467px]">
      <TableHeader>
        <TableRow style={{ boxShadow: "0px 0.6px 0px 0px #CDCDCD" }}>
          <TableHead className="font-bold uppercase">INT</TableHead>
          <TableHead className="font-bold uppercase">ru</TableHead>
          <TableHead className="font-bold uppercase">Обхват груди</TableHead>
          <TableHead className="font-bold uppercase">Обхват талии</TableHead>
          <TableHead className="font-bold uppercase">Обхват бедер</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-[13px] font-bold uppercase text-[#444444]">
        <TableRow>
          <TableCell className="text-center">xs</TableCell>
          <TableCell className="text-center">42</TableCell>
          <TableCell className="text-center">84</TableCell>
          <TableCell className="text-center">64</TableCell>
          <TableCell className="text-center">92</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="text-center">s</TableCell>
          <TableCell className="text-center">44</TableCell>
          <TableCell className="text-center">88</TableCell>
          <TableCell className="text-center">68</TableCell>
          <TableCell className="text-center">96</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="text-center">m</TableCell>
          <TableCell className="text-center">46</TableCell>
          <TableCell className="text-center">92</TableCell>
          <TableCell className="text-center">72</TableCell>
          <TableCell className="text-center">100</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="text-center">l</TableCell>
          <TableCell className="text-center">48</TableCell>
          <TableCell className="text-center">96</TableCell>
          <TableCell className="text-center">76</TableCell>
          <TableCell className="text-center">104</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="pb-4 text-center">xl</TableCell>
          <TableCell className="pb-4 text-center">50</TableCell>
          <TableCell className="pb-4 text-center">100</TableCell>
          <TableCell className="pb-4 text-center">80</TableCell>
          <TableCell className="pb-4 text-center">108</TableCell>
        </TableRow>
      </TableBody>

      <TableFooter className="bg-[#E7E7E7] text-[#656565]">
        <TableRow>
          <TableCell
            colSpan={5}
            className="py-2 pr-[20px] text-right text-[13px]"
            style={{ boxShadow: "0px -0.6px 0px 0px #CDCDCD" }}
          >
            *Все размеры указаны в см
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export { TableSize };
