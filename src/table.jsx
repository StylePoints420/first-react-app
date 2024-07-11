import { Table } from "flowbite-react";

function Component(props) {

    const chemists = props.people.filter((person) => {
        return person.profession === 'it'
     });

     const listItem = chemists.map(person => 
        <Table.Row key={person.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {person.id}
        </Table.Cell>
        <Table.Cell>{person.name}</Table.Cell>
        <Table.Cell>{person.profession}</Table.Cell>
        <Table.Cell>Hey</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>
          <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      );

    return (
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell> ID </Table.HeadCell>
            <Table.HeadCell> Name </Table.HeadCell>
            <Table.HeadCell> Profession </Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
                {listItem}
          </Table.Body>
        </Table>
      </div>
    );
  }

  export { Component };