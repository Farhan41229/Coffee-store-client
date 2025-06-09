import Swal from 'sweetalert2';

const AddCoffee = () => {
  const HandleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    // const form = e.target;
    // const name = form.name.value;
    // const chef = form.chef.value;
    // const supplier = form.supplier.value;
    // const taste = form.taste.value;
    // const category = form.category.value;
    // const details = form.details.value;
    // const photo = form.photo.value;

    // const newCoffee = {
    //   name,
    //   chef,
    //   supplier,
    //   taste,
    //   category,
    //   details,
    //   photo,
    // };

    // console.log('New Coffee:', newCoffee);

    // Send Coffee Data to the DB
    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data after Adding Coffee: ', data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Added coffee successfully',
            icon: 'success',
            draggable: true,
          });
          //   e.target.reset();
        }
      });
  };

  return (
    <div className="py-[70px] px-[112px] bg-[#F4F3F0] space-y-8">
      <h1 className="text-[45px] text-[#374151] text-center font-normal rancho">
        Add New Coffee
      </h1>
      <p className="raleway w-[900px] text-lg text-center mx-auto text-[rgba(27,26,26,0.7)]">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form
        onSubmit={HandleAddCoffee}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Name
          </legend>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Enter coffee name"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Chef
          </legend>
          <input
            type="text"
            name="chef"
            className="input w-full"
            placeholder="Enter coffee chef"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Supplier
          </legend>
          <input
            type="text"
            name="supplier"
            className="input w-full"
            placeholder="Enter coffee supplier"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Taste
          </legend>
          <input
            type="text"
            name="taste"
            className="input w-full"
            placeholder="Enter coffee taste"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Category
          </legend>
          <input
            type="text"
            name="category"
            className="input w-full"
            placeholder="Enter coffee category"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Details
          </legend>
          <input
            type="text"
            name="details"
            className="input w-full"
            placeholder="Enter coffee details"
          />
        </fieldset>
        <fieldset className="fieldset col-span-2">
          <legend className="fieldset-legend raleway text-xl font-semibold ">
            Photo
          </legend>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <input
          className="bg-[#D2B48C] text-[#331A15] col-span-2 py-[13px] text-center text-2xl rancho font-bold border-2 border-[rgb(51,26,21)]"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
