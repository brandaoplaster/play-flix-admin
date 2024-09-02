import { setupServer } from "msw/lib/node";
import { baseUrl } from "../../../features/api/apiSlice";
import { rest } from "msw";
import { renderWithProviders } from "../../../helpers/test-helpers";
import { VideosEdit } from "../../../features/videos/VideosEdit";

const server = setupServer(
  rest.get(`${baseUrl}/genres`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          { id: "1", name: "Genre 1" },
          { id: "2", name: "Genre 2" },
        ],
      })
    );
  }),
  rest.get(`${baseUrl}/cast_members`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          { id: "1", name: "Cast Member 1" },
          { id: "2", name: "Cast Member 2" },
        ],
      })
    );
  }),
  rest.get(`${baseUrl}/videos/:id`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: "1",
          title: "Test Video",
          categories: [],
        },
      })
    );
  }),
  rest.put(`${baseUrl}/videos/:id`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("VideosEdit", () => {
  it("should render correctly", () => {
    const { asFragment } = renderWithProviders(<VideosEdit />);
    expect(asFragment()).toMatchSnapshot();
  });
});
