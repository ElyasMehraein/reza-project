// components/BlockList.js
const BlockList = ({ blocks, onBlockClick }) => (
    <ul>
      {blocks.map((block) => (
        <li key={block.number} onClick={() => onBlockClick(block.number)}>
          Block {block.number}
        </li>
      ))}
    </ul>
  );
  
  export default BlockList;
  