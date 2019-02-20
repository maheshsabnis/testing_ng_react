import { ProductService } from "./app.products.service";
import {
  inject,
  TestBed,
  ComponentFixture,
  async
} from "@angular/core/testing";
import {
  HttpModule,
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod
} from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { By } from "@angular/platform-browser";
describe("ProductService", () => {
  let options: ResponseOptions;
  let data = [
    {
      _id: "5c46fb991c09e5ba160a1755",
      ProductId: 1001,
      ProductName: "Laptop",
      CategoryName: "Electronics",
      Manufacturer: "AB Tech",
      Price: 200000
    },
    {
      _id: "5c46fc40ec186d71c4b7bf0f",
      ProductId: 1002,
      ProductName: "Desktop",
      CategoryName: "Electronics",
      Manufacturer: "AB Tech",
      Price: 36000
    },
    {
      _id: "5c46feb81c09e5ba160a1756",
      ProductId: 1003,
      ProductName: "Iron",
      CategoryName: "Electrical",
      Manufacturer: "CD Power",
      Price: 1000
    },
    {
      _id: "5c47000b15f958c4bca16b11",
      ProductId: 1005,
      ProductName: "Oil",
      CategoryName: "Food",
      Manufacturer: "EF Beverages",
      Price: 1200
    },
    {
      _id: "5c6420288feaae14e4b65c61",
      ProductId: 1004,
      ProductName: "Router",
      CategoryName: "Electronics",
      Manufacturer: "IBM",
      Price: 12000,
      __v: 0
    }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          // objFactory is replaced by useFactory
          provide: Http,
          useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        ProductService
      ]
    });
  });
  it("should get products", async(
    inject(
      [ProductService, MockBackend],
      (service: ProductService, backend: MockBackend) => {
        // creation of backend with Mock
        backend.connections.subscribe((conn: MockConnection) => {
          options = new ResponseOptions({
            body: data
          });
          conn.mockRespond(new Response(options));
        });
        console.log(service);
        // actual call to Back-End
        service.getData().subscribe((res: Response) => {
          expect(res.json()).toEqual(data);
        });
      }
    )
  ));
});
