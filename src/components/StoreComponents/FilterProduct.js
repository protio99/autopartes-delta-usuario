import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import "./headerStore.css";
import { ProductService } from "../../service/productService";

const _productService = new ProductService();

export default function FilterProduct({ setFilter }) {
  const [productName, setProductName] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const onBrandChange = (e) => {
    setSelectedBrand(e.value);
  };
  const onCategoryChange = (e) => {
    setSelectedCategory(e.value);
  };
  const onVehicleChange = (e) => {
    setSelectedVehicle(e.value);
  };
  const selectedBrandTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const selectedCategoryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  useEffect(() => {
    _productService
      .getProductsStore()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(
          "Error al traer los productos de la tienda desde el sideBar",
          error
        );
      });
    _productService.getBrands().then((response) => {
      setBrands(response);
    });
    _productService.getCategories().then((response) => {
      setCategories(response);
    });
    _productService.getVehicles().then((response) => {
      setVehicles(response);
    });
  }, []);

  useEffect(() => {
    setFilter({
      category: selectedCategory?.name || "",
      brand: selectedBrand?.name || "",
      name: productName || "",
      vehicle: selectedVehicle || {
        name: "",
        model: "",
      },
    });
  }, [
    productName,
    selectedBrand,
    selectedCategory,
    setFilter,
    selectedVehicle,
  ]);

  const brandCategoryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.name}</div>
      </div>
    );
  };

  const vehicleOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>
          {option.name} {option.model}
        </div>
      </div>
    );
  };

  return (
    <div className="filter-product-container">
      <div className="filter-product">
        <h6 className="text">Filtrar productos</h6>

        <div className="filter-product-dropdown">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="filter-product-input"
              placeholder="Buscar producto"
            />
          </span>
          <Dropdown
            value={selectedBrand}
            options={brands}
            onChange={onBrandChange}
            optionLabel="name"
            filter
            showClear
            className="filter-product-dropdown__custom"
            filterBy="name"
            placeholder="Marca"
            valueTemplate={selectedBrandTemplate}
            itemTemplate={brandCategoryOptionTemplate}
          />
          <Dropdown
            value={selectedCategory}
            className="filter-product-dropdown__custom"
            options={categories}
            onChange={onCategoryChange}
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Categoria"
            valueTemplate={selectedCategoryTemplate}
            itemTemplate={brandCategoryOptionTemplate}
          />
          <Dropdown
            value={selectedVehicle}
            className="filter-product-dropdown__custom"
            options={vehicles}
            onChange={onVehicleChange}
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Vehículo"
            valueTemplate={selectedBrandTemplate}
            itemTemplate={vehicleOptionTemplate}
          />
        </div>
      </div>
    </div>
  );
}
