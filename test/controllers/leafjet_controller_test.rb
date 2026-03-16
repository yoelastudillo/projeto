require "test_helper"

class LeafjetControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get leafjet_index_url
    assert_response :success
  end
end
