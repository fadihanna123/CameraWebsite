import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Surveillance systems Inc - Om oss";
  }, []);

  return (
    <main className="main">
      <h1>Om oss</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis
        odio non odio finibus imperdiet. Morbi augue ante, scelerisque in metus
        et, feugiat mattis nisi. Aenean vehicula augue quis odio hendrerit
        aliquam. Nunc eget justo risus. Proin placerat leo sed blandit cursus.
        Sed ligula leo, pulvinar vitae velit ac, condimentum elementum libero.
        Fusce nibh leo, lobortis nec efficitur non, vulputate pretium nulla.
        Suspendisse consequat pharetra fringilla. Pellentesque vulputate dictum
        posuere. Nunc nec nulla tempor, rutrum velit in, convallis metus. Donec
        magna justo, ornare nec felis hendrerit, condimentum tempus est. Ut sit
        amet quam eget nisi pretium maximus at eu ex. Nulla ac posuere dui. Cras
        ut massa nec velit volutpat malesuada id vel velit. Sed sollicitudin,
        purus nec tincidunt malesuada, libero erat bibendum turpis, a aliquet
        ante purus ac mauris. Morbi iaculis consectetur turpis, eget finibus
        neque luctus eget. Fusce a accumsan ante. Nam ultrices at nulla id
        consequat. Sed ac nulla scelerisque sapien egestas efficitur. In a sem
        hendrerit velit iaculis luctus. Etiam id porta leo. Maecenas eleifend
        posuere lorem, a accumsan massa condimentum sed. Duis consectetur
        sagittis ex, in semper neque malesuada quis. Proin vel magna libero.
        Praesent ipsum ex, tincidunt vitae facilisis vel, aliquam ut urna. Sed
        at consequat metus. Pellentesque at ligula blandit, pharetra ante vitae,
        euismod massa. Nulla maximus tempor pharetra. Pellentesque et hendrerit
        ligula. Donec rutrum augue quis ipsum laoreet, at accumsan nunc
        scelerisque. Suspendisse auctor dapibus purus, in lobortis massa
        tristique sed. Proin ligula tortor, interdum at maximus ut, imperdiet
        quis libero. Sed tristique iaculis ligula, vitae venenatis velit gravida
        id. Quisque tincidunt sed augue non pellentesque. Aenean scelerisque
        enim erat. Nunc varius sem ut massa tempor finibus. Vivamus convallis
        consequat ligula. Pellentesque ante magna, pellentesque eget iaculis eu,
        condimentum eleifend lacus. In hac habitasse platea dictumst. Sed
        lacinia neque ut dolor malesuada laoreet. Mauris blandit nisl purus,
        quis posuere dolor tincidunt non. In ut rutrum purus. Etiam tincidunt
        erat nec semper porta. Fusce elementum mattis odio, a egestas ligula.
        Aenean sit amet turpis convallis, bibendum justo non, efficitur justo.
        Suspendisse nec quam augue. Nulla facilisi. Aenean sapien leo, suscipit
        ut nulla id, dictum maximus purus. Nulla facilisi. Sed fringilla risus
        eget enim laoreet, eu rutrum sapien eleifend. Proin hendrerit interdum
        sem, ut tempor arcu mollis et. Morbi quis ex vitae eros mollis gravida.
        Duis viverra purus sit amet erat posuere ornare. Nam ut cursus elit.
        Maecenas a velit sem. Donec tristique porta eleifend. Praesent at est
        pulvinar, blandit massa et, posuere neque. Cras augue purus, laoreet
        quis turpis ac, dignissim sagittis massa. Phasellus sapien lectus,
        condimentum vel elit a, sodales egestas urna. Suspendisse et libero
        malesuada, sollicitudin lacus eu, sagittis felis.
      </p>
    </main>
  );
};

export default About;
