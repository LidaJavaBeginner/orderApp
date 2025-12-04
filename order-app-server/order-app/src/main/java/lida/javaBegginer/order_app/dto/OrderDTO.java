package lida.javaBegginer.order_app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class OrderDTO {

    @JsonProperty("id")
    private Long id;

    private Long orderNumber;

    private CustomerDTO customer;

    private ProductDTO product;

    private int productCount;

    private Double totalPrice;

    private Double totalVat;

    private Double totalVatPrice;

}
