package lida.javaBegginer.order_app.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductDTO {

    @JsonProperty("id")
    private Long id;

    private String name;

    private Double unitPrice;

    private String description;

}
